import json
import pandas as pd

df = pd.read_csv("data.csv")

# Convert Grade Columns to numbers, convert empty spaces or text into NaN
# errors = "coerce" ensures that the system will substitute texts to NaN, preventing program from crashing
df["rpigp"] = pd.to_numeric(df["rpigp"], errors = "coerce")
df["gpaigp"] = pd.to_numeric(df["gpaigp"], errors = "coerce")
df["studentintake"] = pd.to_numeric(df["studentintake"], errors = "coerce")

# Current = AY2025/26, Predict = AY2026/27
currentYear = int(df["academicyear"].max())
targetYear = currentYear + 1

# Assigning weights to the historical 5 years, with more weight placed on recent years
weights = [0.40,0.25,0.15,0.10,0.10]

def prediction(numbersList):
    valid_numbers = []
    valid_weights = []

    # Assign each historical number with corresponding weight
    for number, weight in zip(numbersList, weights): # zip matches the 2 lists - numbers and weights up by index
        if pd.notna(number): # if the number is not missing or blank,
            valid_numbers.append(number)
            valid_weights.append(weight)
    
    # If valid_numbers list is completely empty after the loop above, this if not statement will run
    # All 5 years have NaN values
    if not valid_numbers:
        return "##"
    
    # Adjust valid weights to add up to 1.0 in cases where there are missing values
    total_weight = sum(valid_weights)
    normalised_weight = [w / total_weight for w in valid_weights]

    # Calculate final number
    return sum(s * w for s, w in zip(valid_numbers, normalised_weight))


# Store final calculated predictions in this dictionary
prediction_map = {}

# Group data by university and course, then loop through each group
for (uni, course), group in df.groupby(["university", "coursename"]):
    # Get data for the past 5 years only, sorted from newest to oldest year
    past5Year = group[(group["academicyear"] <= currentYear) # filter for all rows on or before current year, ensures that there are no future years included
                      & (group["academicyear"] >= currentYear - 4)].sort_values("academicyear", ascending=False) # filter for rows greater or equal to 4 years back from the current year. & condition locks in a perfect 5 year window together with the earlier code.
    
    # Extract the numbers and strictly fIlls up 5 slots in the list (blanks will be filled with None). 
    # Acts as an additional safety net to ensure that there are only 5 values
    # in the event the above group allow more than 5 rows (multiple rows of same year) or less than 5 rows (missing year rows) to pass through
    rp_history = (past5Year["rpigp"].tolist() + [None] * 5)[:5]
    gpa_history = (past5Year["gpaigp"].tolist() + [None] * 5)[:5]
    studentintake_history = (past5Year["studentintake"].tolist() + [None] * 5)[:5]

    # Run the list using the prediction function
    pred_rp = prediction(rp_history)
    pred_gpa = prediction(gpa_history)
    pred_studentintake = prediction(studentintake_history)

    # Create a unique string key eg "NUS,Computer Science"
    cleanedUni = str(uni).strip() # ensures that it is a string, and removes empty spaces from the front and back of the text (similar to trim(), but trim() does not exist in python)
    cleanedCourse = str(course).strip()
    lookup_key = f"{cleanedUni},{cleanedCourse}"

    # Store final rounded calculation into the dictionary
    prediction_map[lookup_key] = {
        "future_rpigp": round(pred_rp, 2) if isinstance(pred_rp, (int, float)) else pred_rp,
        "future_gpaigp": round(pred_gpa, 2) if isinstance(pred_gpa, (int, float)) else pred_gpa,
        "future_studentintake": round(pred_studentintake) if isinstance(pred_studentintake, (int, float)) else pred_studentintake
    }

# Save everything into predictions.json for JS to read
# open() tells computer to look for the file named predictions.json in a folder named 'static'
# w means Write Mode. It tells python you want to put data into prediction.json file
# as f: creates a temporary nickname for the open file object for reference in next line
# json.dump() converts Python dictionary data structure into standard JSON text format
# prediction_map being the first argument, tells the function what data you want to save
# f being the second argument, tells the function where to save the data
# indent = 4 is the layout of the text file - clean line breaks and 4 spaces of indentation for each nested layer
with open("static/predictions.json", "w") as f:
    json.dump(prediction_map, f, indent = 4)

