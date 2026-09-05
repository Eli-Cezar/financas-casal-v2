@echo off
echo 🔧 Resolvendo conflitos do Git...
cd /d "C:\ProgramData\App\Finanças_Novo\AppSupabase"

echo 📋 Status atual:
git status
echo.

echo ⚠️ Deseja abortar o rebase e voltar ao estado anterior?
echo    [1] Abortar rebase (voltar antes do pull)
echo    [2] Manter suas alterações (usar local)
echo    [3] Manter alterações do GitHub (usar remoto)
echo    [4] Sair
set /p opcao="Escolha: "

if "%opcao%"=="1" goto ABORTAR
if "%opcao%"=="2" goto MANTER_LOCAL
if "%opcao%"=="3" goto MANTER_REMOTO
if "%opcao%"=="4" goto SAIR

:ABORTAR
echo.
echo ⏪ Abortando rebase...
git rebase --abort
echo ✅ Rebase abortado. Volte ao estado anterior.
pause
goto SAIR

:MANTER_LOCAL
echo.
echo 📌 Mantendo suas alterações (local)...
git checkout --ours Dockerfile auth.js firebase-messaging-sw.js index.html supabase-config.js sw-push.js
git add Dockerfile auth.js firebase-messaging-sw.js index.html supabase-config.js sw-push.js
git rebase --continue
git push origin main
echo ✅ Conflitos resolvidos (suas alterações mantidas)!
pause
goto SAIR

:MANTER_REMOTO
echo.
echo 📌 Mantendo alterações do GitHub (remoto)...
git checkout --theirs Dockerfile auth.js firebase-messaging-sw.js index.html supabase-config.js sw-push.js
git add Dockerfile auth.js firebase-messaging-sw.js index.html supabase-config.js sw-push.js
git rebase --continue
git push origin main
echo ✅ Conflitos resolvidos (alterações do GitHub mantidas)!
pause
goto SAIR

:SAIR
exit