```
create_table "answers", force: :cascade do |t|
    t.text "body"
    t.boolean "correct"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "question_id"
    t.index ["question_id"], name: "index_answers_on_question_id"
  end  
```
```
  create_table "questions", force: :cascade do |t|
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "quiz_id"
    t.index ["quiz_id"], name: "index_questions_on_quiz_id"
  end 
```
```
  create_table "quizzes", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "published"
  end
```
```
  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "api_token"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
```
```
  add_foreign_key "answers", "questions"
  add_foreign_key "questions", "quizzes"
end
```
