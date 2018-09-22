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
QUESTIONS_TABLE = CSV.read("../samples/questions.csv", converters: :numeric, headers: true)
ANSWERS_TABLE = CSV.read("../samples/answers.csv", converters: :numeric, headers: true)

QUIZZES_TABLE.each {|quiz_row|
  quiz = Quiz.new(
    title:quiz_row["title"],
    description:quiz_row["description"],
    published:quiz_row["published"]
  )
  quiz.save
  
  QUESTIONS_TABLE.select {|question_row_search|
    question_row_search["quiz_id"] == quiz_row["id"]
    }.each {|question_row_match|
      question = Question.new(
        body:question_row_match["body"],
        quiz_id:quiz.id
      )
      question.save

      ANSWERS_TABLE.select {|answer_row_search|
        answer_row_search["question_id"] == question_row_match["id"]
        }.each {|answer_row_match|
          answer = Answer.new(
            body:answer_row_match["body"],
            correct:answer_row_match["correct"],
            question_id:question.id
          )
          answer.save
        }
    }

}