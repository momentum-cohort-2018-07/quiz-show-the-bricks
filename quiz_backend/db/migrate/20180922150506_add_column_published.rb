class AddColumnPublished < ActiveRecord::Migration[5.2]
  def change
    change_table :quizzes do |t|
      t.boolean :published
    end
  end
end
