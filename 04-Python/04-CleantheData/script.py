import seaborn
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Import CSVs:
user_data = pd.read_csv("user_data.csv")
pop_data = pd.read_csv("pop_data.csv")

# Merged tables with location data:
new_df = pd.merge(user_data, pop_data)
new_df.loc[new_df.population_proper < 100000, "location"] = "rural"
new_df.loc[new_df.population_proper >= 100000, "location"] = "urban"

# Plot linear regression:
sns.regplot(x="population_proper", y="age", data=new_df)
plt.show()


# Paste code to change the figure style and palette:

plt.close()

sns.set_style("darkgrid")
sns.set_palette("bright")
sns.despine()

sns.regplot(x="population_proper", y="age", data=new_df)

plt.show()

# Paste code to change the axes:



# Paste code to title the axes and the plot: 


