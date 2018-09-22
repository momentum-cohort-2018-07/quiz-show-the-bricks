# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

USERS_TABLE = CSV.read("../samples/users.csv", converters: :numeric, headers: true)
USERS_TABLE.each {|row|
  User.new(
    username:row["username"],
    password:row["password"],
    role:row["role"]
  ).save
}

QUIZZES_TABLE = CSV.read("../samples/quizzes.csv", converters: :numeric, headers: true)

# QUESTIONS_TABLE = CSV.read("../samples/questions.csv", converters: :numeric, headers: true)

# ANSWERS_TABLE = CSV.read("../samples/answers.csv", converters: :numeric, headers: true)
