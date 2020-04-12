module.exports = function(sequelize, DataTypes) {
    
    var Comments = sequelize.define("Comments", {
     
      comments: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
        allowNull: false
      }
    });
  
   
    Comments.associate = function(models) {
      Comments.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
   
  
    return Comments;
  };