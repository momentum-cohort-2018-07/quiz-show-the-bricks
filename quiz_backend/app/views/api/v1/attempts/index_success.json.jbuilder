json.attempts @attempts do |attempt|
  json.quiz_title attempt.quiz.title
  json.score attempt.score
  json.date_time attempt.created_at
end