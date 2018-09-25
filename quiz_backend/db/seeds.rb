require 'csv'

USERS_STRING = %q(username,password,role
greguser,gregpassword,user
ashleyuser,ashleypassword,user
danuser,danpassword,user
gregadmin,gregpassword,admin
ashleyadmin,ashleypassword,admin
danadmin,danpassword,admin)

QUIZZES_STRING = %q(id,title,description,published
1,JavaScript arrays,seed quiz from samples folder,true
2,Rails models,seed quiz from samples folder,true)

QUESTIONS_STRING = %q(id,quiz_id,body
1,1,What method do you use to get all records that match a condition?
2,1,What does `findIndex` return if no records match its condition?
3,1,Which of the following does the method `map` do?
4,2,"Given a table `posts` and another table `comments` with the field `post_id`, which of the following associations would you use to connect the tables?"
5,2,Which of the following is a built-in Rails validation?
6,2,Which of the following is **not** a database you can use with ActiveRecord?)

ANSWERS_STRING = %q(id,question_id,body,correct
1,1,find,false
2,1,findAll,false
3,1,filter,true
4,1,reduce,false
5,2,-1,true
6,2,false,false
7,2,null,false
8,3,create a new array of shorter length than the original,false
9,3,create a new array of the same length as the original,true
10,3,return a single value,false
11,3,transform the original array,false
12,4,`has_and_belongs_to_many :posts` in `Comment`,false
13,4,"`belongs_to :post, through: :post_id` in `Comment`",false
14,4,"`has_many :comments` in `Post`",true
15,4,`belongs_to :comment` in `Post`,false
16,5,numericality,true
17,5,reliability,false
18,5,email,false
19,5,text,false
20,5,size,false
21,6,PostgreSQL,false
22,6,SQLite,false
23,6,MySQL,false
24,6,MongoDB,true)

USERS_TABLE = CSV.parse(USERS_STRING, converters: :numeric, headers: true)
USERS_TABLE.each {|row|
  User.new(
    username:row["username"],
    password:row["password"],
    role:row["role"]
  ).save
}

QUIZZES_TABLE = CSV.parse(QUIZZES_STRING, converters: :numeric, headers: true)
QUESTIONS_TABLE = CSV.parse(QUESTIONS_STRING, converters: :numeric, headers: true)
ANSWERS_TABLE = CSV.parse(ANSWERS_STRING, converters: :numeric, headers: true)

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

  5.times do
    attempt = Attempt.new({
      "score": rand(0..quiz.questions.length),
      "quiz_id": quiz.id,
      "user_id": User.all.shuffle.first.id
    })
    attempt.save
  end

}

