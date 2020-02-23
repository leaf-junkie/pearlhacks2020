#!/bin/python3
import pandas as pd 

df=pd.read_csv("pearlhaxx2020.csv")

df.pivot(columns="Message_ID")

df.to_csv("pivoted_pearlhaxx2020.csv",index=False)