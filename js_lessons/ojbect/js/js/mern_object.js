const users = [
    {
        name:   'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
      },
    {
        name:   'Job',
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
    {
        name:   'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 60
      },
    {
        name:   'Daniel',
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
      },
    {
        name:   'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 55
      },
    {
        name:   'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
      },
    {
        name:    'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
      }
    ];
    console.table(users);
    console.log("================n-1=============");

    console.table(users[0]);
    console.log("==========n-2==============");
const skill_user=()=>{
  let max_skills =0;
  
   for (let i=0; i<users.length;i++){
    if(users[i].skills.length>max_skills){
      max_skills=users[i].skills.length;
    }
    console.log(`Хамгийн их ур чадвартай хүн,${max_skills}`)
  }
}
const point=()=>{  
  let max_point=0;
   for(let i=0;i<users.length;i++){
    if(users[i].points>=50){
     max_point=users[i].points
    
    }
    console.log(`Хамгийн их оноотой хүн,${max_point}`);
  }
}
skill_user();
point();

const mern=()=>{
 
}
mern();



    