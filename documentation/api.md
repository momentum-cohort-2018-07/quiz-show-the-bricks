# API documentation

## users#login

POST https://fierce-forest-49180.herokuapp.com/api/v1/users/login

api_token not required

required keys:
* username: string, must be unique, minimum length: 1
* password: string, minimum length: 5

## users#create (register)

POST https://fierce-forest-49180.herokuapp.com/api/v1/users

api_token not required

required keys:
* username: string, must be unique, minimum length: 1
* password: string, minimum length: 5

## quizzes#index

GET https://fierce-forest-49180.herokuapp.com/api/v1/quizzes

api_token not required

no required keys

## quizzes#show

GET	https://fierce-forest-49180.herokuapp.com/api/v1/quizzes/:id

valid api_token required

<<<<<<< HEAD
no required keys
=======
no required keys

## attempts#create (submit quiz attempt)

POST https://fierce-forest-49180.herokuapp.com/api/v1/attempts

valid api_token required

required request format:

    {"quiz": {
      "id": quiz id (integer),
      "questions": [
        {"id": question id (integer),
          "answers": [
              {"id": answer id (integer),
                "checked": user's input (boolean)
              }]
        }]
      }
    }
>>>>>>> 58492daf72f1f0f47185e30839e772a4b5bd36d7
