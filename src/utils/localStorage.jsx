

const employees = [
  {
    id: "emp001",
    firstName: "Rahul",
    email: "emp1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Profile Info",
        description: "Update your contact and address details in the system.",
        date: "2025-07-10",
        category: "Profile"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit Timesheet",
        description: "Timesheet for the last week must be submitted.",
        date: "2025-07-05",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Attend Team Meeting",
        description: "Missed the mandatory team meeting.",
        date: "2025-07-01",
        category: "Meetings"
      }
    ]
  },
  {
    id: "emp002",
    firstName: "Sneha",
    email: "emp2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage Banner",
        description: "Create new promotional banner for homepage.",
        date: "2025-07-11",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolved issue with sticky navigation on scroll.",
        date: "2025-07-09",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Feedback Report",
        description: "Compiled user feedback for Q2 release.",
        date: "2025-07-06",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Push Login Update",
        description: "Missed the login UI update deadline.",
        date: "2025-07-03",
        category: "Development"
      }
    ]
  },
  {
    id: "emp003",
    firstName: "Amit",
    email: "emp3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Conduct Interview",
        description: "Interview candidate for frontend role.",
        date: "2025-07-12",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Review Resumes",
        description: "Shortlist resumes for backend developer.",
        date: "2025-07-09",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Onboarding Documents",
        description: "Forgot to upload onboarding checklist.",
        date: "2025-07-02",
        category: "HR"
      }
    ]
  },
  {
    id: "emp004",
    firstName: "Priya",
    email: "emp4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize SQL Queries",
        description: "Improve performance of payroll database queries.",
        date: "2025-07-11",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Monthly Report",
        description: "Submitted payroll processing report.",
        date: "2025-07-05",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Process June Salaries",
        description: "Handled salary transfers for June payroll.",
        date: "2025-07-01",
        category: "Payroll"
      }
    ]
  },
  {
    id: "emp005",
    firstName: "Karan",
    email: "emp5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Workshop Slides",
        description: "Create presentation slides for upcoming workshop.",
        date: "2025-07-13",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Email Campaign Draft",
        description: "Finished the content for July campaign.",
        date: "2025-07-08",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Course Listings",
        description: "Added new tech courses to training portal.",
        date: "2025-07-06",
        category: "LMS"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Feedback Form Update",
        description: "Failed to update feedback system by deadline.",
        date: "2025-07-04",
        category: "Support"
      }
    ]
  }
];

  const admin = [{
    "id": "admin001",
    "firstName" :"Sumit",
    "email": "admin@example.com",
    "password": "123"
    }
 ]

 export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
 }

 export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}

 }

