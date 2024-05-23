using Backend.Core.Enums;

namespace Backend.Core.Entities;

public class Newborn : BaseEntity
{
    public int UserId { get; set; }
    public string Name { get; set; }
    public DateTime DateOfBirth { get; set; }
    public Gender Gender { get; set; }

    // TODO: change if not working
    public User User { get; set; } = new User()
    {
        Role = Role.Newborn
    };

    public ICollection<UserParent> UserParents;
}