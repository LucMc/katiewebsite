import os
'''
Just run python push_to_website.py
Do this to ensure that changes are made on the actual website
not just the local server

If you want to change any files, images CV etc.
python manage.py collectstatic

With CV can open in explorer and copy and paste new doc --> make sure
to rename the same as it was previously (i.e. Katie_CV)
'''


os.system("git add --all")
os.system('git commit -m "Automated update"')
os.system("git push")
