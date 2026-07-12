@echo off
echo ==============================================
echo Pushing CVision changes to GitHub...
echo ==============================================
echo.
echo 1. Adding App.css changes...
git add frontend/src/App.css
echo.
echo 2. Committing changes...
git commit -m "Fix table header column visibility"
echo.
echo 3. Pushing to GitHub...
git push origin main
echo.
echo ==============================================
echo Finished! If there were no errors, Vercel is now deploying the fix.
echo ==============================================
pause
