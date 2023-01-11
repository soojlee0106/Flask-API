import pickle
from sklearn.metrics import accuracy_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd

df = pd.read_csv('students_placement.csv')

X = df.drop(columns=['placed'])
y = df['placed']
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=2)

# train the model
rf = RandomForestClassifier()
rf.fit(X_train, y_train)
y_pred = rf.predict(X_test)

# save the model in pickle format
pickle.dump(rf, open('model.pkl', 'wb'))
