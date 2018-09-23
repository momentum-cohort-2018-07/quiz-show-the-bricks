# API documentation

##login
POST https://fierce-forest-49180.herokuapp.com/api/v1/users/login(.:format)
api_token not required
required keys:
* username: string, must be unique, minimum length: 1
* password: string, minimum length: 5

## users#create (register)
POST https://fierce-forest-49180.herokuapp.com/api/v1/users(.:format)
api_token not required
required keys:
* username: string, must be unique, minimum length: 1
* password: string, minimum length: 5

## quizzes#index
GET https://fierce-forest-49180.herokuapp.com/api/v1/quizzes(.:format)
api_token not required
no required keys