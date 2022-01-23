function MemberFactory() {
    this.createMember = function (name, type) {
        let member;
        if (type === 'basic') {
            member = new BasicMember(name)
        } else if (type === 'standard') {
            member = new StandardMember(name)
        } else if (type === 'premium') {
            member = new PremiumMember(name);
        }
        member.type = type;
        member.profile = function () {
            console.log(`${this.name} is ${this.type} member, which cost ${this.cost}`)
        }
        return member
    }
}

const BasicMember = function (name) {
    this.name = name
    this.cost = '$8.99';

}
const StandardMember = function (name) {
    this.name = name
    this.cost = '$12.99';

}
const PremiumMember = function (name) {
    this.name = name
    this.cost = '$15.99';

}
const members = [];
const factory = new MemberFactory();
const alan = factory.createMember('Alan', 'standard');
const peter = factory.createMember('Peter', 'standard');
const john = factory.createMember('John', 'premium');
members.push(alan, peter, john);
// console.log(members)

members.forEach(member => {
    member.profile()
});