# finance_project

Personal stock-watchlist web app: a Django REST backend and a React frontend
in one repo. A logged-in user keeps an ordered list of stocks; the frontend
handles signup/login and renders the list.

## Layout

- `finance_project-backend/` — Django 4 + Django REST Framework.
  - `stocks/` app: per-user `Stock` list with authenticated
    list/create (`ListCreateStocksView`) and manual reordering
    (`ReOrderStocksView`) under `api/stocks/`.
  - Auth via [djoser](https://djoser.readthedocs.io/) under `api/auth/`
    (token + JWT endpoints).
- `finance_project-frontend/` — Create React App (`src/user` login/signup,
  `src/stocks` stock list, `src/lookup` API client).

## Run it

Backend:

```bash
cd finance_project-backend
pip install -r ../requirements.txt   # or: pipenv install
python manage.py migrate
python manage.py runserver           # http://localhost:8000
```

Frontend (in a second terminal):

```bash
cd finance_project-frontend
npm install
npm start                            # http://localhost:3000
```

## Status

Learning/side project, last worked on around the stock-list frontend; no
tests and no deployment setup.
