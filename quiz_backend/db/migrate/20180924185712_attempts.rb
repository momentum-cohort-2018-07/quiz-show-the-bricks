class Attempts < ActiveRecord::Migration[5.2]
  def change
    add_reference :attempts, :quiz, foreign_key: true
    add_reference :attempts, :user, foreign_key: true
  end
end
