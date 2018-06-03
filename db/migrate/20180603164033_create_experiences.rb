class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :title
      t.text :body
      t.string :country_1
      t.string :city_1
      t.string :country_2
      t.string :city_2
      t.date :start_date
      t.date :end_date
      t.string :keywords
      t.string :img_url

      t.timestamps
    end
  end
end
