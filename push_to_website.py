import os
'''
Just run python push_to_website.py
'''


os.system("git add --all")
os.system('git commit -m "Automated update"')
os.system("git push")
