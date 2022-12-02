# Challenge Chapter 6

Buat 3 Database

1. User_game
    a. username
    b. password
    c. role
sequelize model:generate --name User_Game --attributes username:string,password:string,role:string    
2. user_game_biodata
    a. name
    b. age
    c. gender
sequelize model:generate --name User_Game_Biodata --attributes name:string,age:integer
3. user_game_history
    a. hasil pertandingan
sequelize model:generate --name User_Game_History --attributes hasil_pertandingan:integer 


