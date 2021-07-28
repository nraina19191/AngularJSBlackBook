@echo off
echo Environment Codes:
echo For DEV 0
echo For Stag 1
set /p env=Enter Environment Code to run grunt:
echo Running for %env%
if %env%==1 (grunt --staging) else (grunt)
pause