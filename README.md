# Django Todo List

Django Todo List is my first project developed (almost) from scratch to practice Django.

It is a simple web application for managing tasks. It allows users to add, delete, and mark tasks as completed in a super simple interface.

When I say it was "almost" from scratch, it is because it's a sort of _continuation_ of a vanilla JS web app I created in the past, which can be [seen on my Codepen](https://codepen.io/lucasfads/pen/NXwNMw).

The design is inspired by this [Virtual Assistant project I saw on Dribbble](https://dribbble.com/shots/2354162-Virtual-Assistant-App-Interaction).

## Built with:

- [Django](https://www.djangoproject.com/)
- [SQLite](https://www.sqlite.org/index.html) (built-in with Django)
- [jQuery](https://jquery.com/)

## Requirements:

- [Python](https://www.python.org/) (3.x or higher)
- [Django](https://www.djangoproject.com/) (3.x or higher)

## Running it

To get the Django Todo List running locally:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Apply the migrations:
```bash
python manage.py migrate
```
4. Start the development server:
```bash
python manage.py runserver
```
5. Access `http://127.0.0.1:8000/` in your browser.