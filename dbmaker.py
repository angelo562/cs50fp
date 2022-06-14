"""This imports filename in same directory, and saves Sheet1 as recipe.db
    Bash commands do not work as sqlite is not installed outside of python
"""

import sqlite3
import pandas as pd

filename = "cs50fp/recipescsv.csv"

con = sqlite3.connect('recipe.db')
wb = pd.read_csv(filename)
wb.to_sql(name='recipes', con=con, if_exists='append', index=True)


# cur = con.cursor()



#Save and close
con.commit()
con.close()
