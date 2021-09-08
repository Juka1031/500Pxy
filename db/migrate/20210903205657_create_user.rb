class CreateUser < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
        t.string :username, nil: false
        t.string :email, nil: false
        t.integer :birthday
        t.string :biography
        t.string :session_token, nil:false
        t.string :password_digest, nil:false
      t.timestamps
    end
    add_index :users, :username, unique:true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
