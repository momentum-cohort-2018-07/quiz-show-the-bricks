json.status 200
json.quizzes @quizzes do |quiz|
  json.id quiz.id
  json.title quiz.title
  json.description quiz.description
  json.questions_count quiz.questions.length
  json.average_score 1.7
end