using Backend.Core.Enums;

namespace Backend.Core.Entities;

public class Parent: BaseEntity
{
    public int UserId { get; set; }
    public string Name { get; set; }
    public string ContractInfo { get; set; }

    // TODO: change if not working
    public User User { get; set; } = new User()
    {
        Role = Role.Parent
    };
    
    public ICollection<UserParent> UserParents;
}