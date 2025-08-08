go install -v github.com/wailsapp/wails/v3/cmd/wails3@latest
wails3 init -n myfirstapp -t react-ts
cd  myfirstapp
rm -rf frontend

npx create-next-app@latest
cd frontend
npx shadcn@latest init

rm -rf  .git


# Taskfile.yml
# next.config.ts