const mongoose = require('mongoose');

const Tutor = require("./models/tutor_models");
const Student = require("./models/student_models");
const Tutorial = require("./models/tutorial_models");

mongoose
.connect('mongodb+srv://bradleyekhodiahi:JmFaJLHvqVsPc335@cs230codingexam.zpingyi.mongodb.net/?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {console.log('Connected to MongoDB');})
.catch((error) => console.error("Failed to connect to MongoDB", error));
  

data_insertion();

async function data_insertion()
{
    try
    { 
       

const tutor_data = 
[{
    
        id: "001",
        title: "Mr",
        first_name: "John",
        surname: "Doe",
        phone_no: "1234567890",
        email: "johndoe@example.com",
        address: 
        {
          line1: "123 Main Street",
          line2: "",
          town: "Cityville",
          county: "Countyshire",
          eircode: ""
        }
 },
 {
    id: "002",
    title: "Ms",
    first_name: "Jane",
    surname: "Smith",
    phone_no: "9876543210",
    email: "janesmith@example.com",
    address: 
    {
      line1: "456 Elm Avenue",
      line2: "Apartment 3B",
      town: "Townsville",
      county: "Countyville",
      eircode: "EIR123"
    }
  },
  {
    id: "003",
    title: "Dr",
    first_name: "David",
    surname: "Johnson",
    phone_no: "5555555555",
    email: "davidjohnson@example.com",
    address: 
    {
      line1: "789 Oak Road",
      line2: "",
      town: "Villagetown",
      county: "Countyton",
      eircode: ""
    }
  },
  {
    id: "004",
    title: "Mrs",
    first_name: "Emily",
    surname: "Brown",
    phone_no: "4444444444",
    email: "emilybrown@example.com",
    address: 
    {
      line1: "321 Pine Street",
      line2: "Unit 5C",
      town: "Hamletville",
      county: "Countyham",
      eircode: "EIR456"
    }
  },
  {
    id: "005",
    title: "Mr",
    first_name: "Michael",
    surname: "Wilson",
    phone_no: "9999999999",
    email: "michaelwilson@example.com",
    address: 
    {
      line1: "555 Cedar Avenue",
      line2: "",
      town: "Villageville",
      county: "Countytown",
      eircode: ""
    }
  },
  {
    id: "006",
    title: "Ms",
    first_name: "Sarah",
    surname: "Lee",
    phone_no: "7777777777",
    email: "sarahlee@example.com",
    address: 
    {
      line1: "888 Maple Road",
      line2: "Suite 10",
      town: "Citytown",
      county: "Countyville",
      eircode: "EIR789"
    }
  
}]

const student_data =
[{
    id: "1",
    title: "Miss",
    first_name: "Emma",
    surname: "Johnson",
    birthdate: "2005-08-15",
    gender: "Female",
    phone_no: "1234567890",
    email: "emma.johnson@example.com",
    address: {
      line1: "123 Main Street",
      line2: "Apartment 4B",
      town: "Cityville",
      county: "Countyshire",
      eircode: "E12345",
    },
    parental_permission: "Yes",
    subject: "Mathematics",
    parent_name: "Sarah Johnson",
  },
  {
    id: "2",
    title: "Mr",
    first_name: "James",
    surname: "Smith",
    birthdate: "2004-11-20",
    gender: "Male",
    phone_no: "9876543210",
    email: "james.smith@example.com",
    address: {
      line1: "456 Elm Street",
      line2: "",
      town: "Townville",
      county: "Countytown",
      eircode: "E67890",
    },
    parental_permission: "Yes",
    subject: "English",
    parent_name: "Michael Smith",
  },
  {
    id: "3",
    title: "Miss",
    first_name: "Olivia",
    surname: "Williams",
    birthdate: "2006-02-10",
    gender: "Female",
    phone_no: "4567890123",
    email: "olivia.williams@example.com",
    address: {
      line1: "789 Oak Avenue",
      line2: "",
      town: "Villageville",
      county: "Countyville",
      eircode: "E45678",
    },
    parental_permission: "Yes",
    subject: "Computer Science",
    parent_name: "Emily Williams",
  },
  {
    id: "4",
    title: "Mr",
    first_name: "Noah",
    surname: "Brown",
    birthdate: "2005-05-01",
    gender: "Male",
    phone_no: "8901234567",
    email: "noah.brown@example.com",
    address: {
      line1: "987 Pine Street",
      line2: "Suite 10",
      town: "Hamletown",
      county: "Countyham",
      eircode: "E56789",
    },
    parental_permission: "Yes",
    subject: "Biology",
    parent_name: "David Brown",
  },
  {
    id: "5",
    title: "Miss",
    first_name: "Ava",
    surname: "Jones",
    birthdate: "2006-09-05",
    gender: "Female",
    phone_no: "2345678901",
    email: "ava.jones@example.com",
    address: {
      line1: "654 Maple Lane",
      line2: "",
      town: "Villagetown",
      county: "Countyton",
      eircode: "E23456",
    },
    parental_permission: "Yes",
    subject: "Chemistry",
    parent_name: "Jessica Jones",
  },
  {
    id: "6",
    title: "Mr",
    first_name: "Liam",
    surname: "Davis",
    birthdate: "2004-12-25",
    gender: "Male",
    phone_no: "3456789012",
    email: "liam.davis@example.com",
    address: {
      line1: "321 Cedar Street",
      line2: "Apartment 7C",
      town: "Villetown",
      county: "Countycity",
      eircode: "E34567",
    },
    parental_permission: "Yes",
    subject: "Mathematics",
    parent_name: "Andrew Davis",
  },
  {
    id: "7",
    title: "Miss",
    first_name: "Isabella",
    surname: "Wilson",
    birthdate: "2005-07-18",
    gender: "Female",
    phone_no: "6789012345",
    email: "isabella.wilson@example.com",
    address: {
      line1: "876 Oak Lane",
      line2: "",
      town: "Citytown",
      county: "Countyville",
      eircode: "E78901",
    },
    parental_permission: "Yes",
    subject: "English",
    parent_name: "Sophia Wilson",
  },
  {
    id: "8",
    title: "Mr",
    first_name: "Mason",
    surname: "Taylor",
    birthdate: "2006-03-12",
    gender: "Male",
    phone_no: "7890123456",
    email: "mason.taylor@example.com",
    address: {
      line1: "765 Pine Avenue",
      line2: "",
      town: "Villageton",
      county: "Countycity",
      eircode: "E89012",
    },
    parental_permission: "Yes",
    subject: "Physics",
    parent_name: "Emily Taylor",
  },
  {
    id: "9",
    title: "Miss",
    first_name: "Sophia",
    surname: "Martin",
    birthdate: "2005-04-02",
    gender: "Female",
    phone_no: "8901234567",
    email: "sophia.martin@example.com",
    address: {
      line1: "654 Elm Lane",
      line2: "",
      town: "Townhamlet",
      county: "Countycity",
      eircode: "E90123",
    },
    parental_permission: "Yes",
    subject: "Irish",
    parent_name: "Oliver Martin",
  },
  {
    id: "10",
    title: "Mr",
    first_name: "Lucas",
    surname: "Anderson",
    birthdate: "2006-10-08",
    gender: "Male",
    phone_no: "9012345678",
    email: "lucas.anderson@example.com",
    address: {
      line1: "543 Maple Street",
      line2: "",
      town: "Villagehamlet",
      county: "Countyville",
      eircode: "E01234",
    },
    parental_permission: "Yes",
    subject: "Biology",
    parent_name: "Jack Anderson",
}]

const tutorial_data =
[{
    id: "1",
    tutorial_date: "2023-01-10",
    tutorial_time: "14:00",
    students: "Emma Johnson, James Smith",
    tutor: "John Doe",
    fee: "50",
    tutorial_no: "TUT001",
    attendance: "Attended",
    tutorial_subject: "Mathematics",
    tutorial_notes: "Covered algebra concepts",
  },
  {
    id: "2",
    tutorial_date: "2023-01-12",
    tutorial_time: "16:00",
    students: "Olivia Williams, Noah Brown",
    tutor: "Jane Smith",
    fee: "60",
    tutorial_no: "TUT002",
    attendance: "Cncelled",
    tutorial_subject: "Computer Science",
    tutorial_notes: "Worked with Java",
  },
  {
    id: "3",
    tutorial_date: "2023-01-15",
    tutorial_time: "10:00",
    students: "Ava Jones, Liam Davis",
    tutor: "Michael Wilson",
    fee: "45",
    tutorial_no: "TUT003",
    attendance: "Csncelled",
    tutorial_subject: "English",
    tutorial_notes: "Discussed literature analysis techniques",
  },
  {
    id: "4",
    tutorial_date: "2023-01-18",
    tutorial_time: "14:30",
    students: "Isabella Wilson, Mason Taylor",
    tutor: "Sarah Lee",
    fee: "55",
    tutorial_no: "TUT004",
    attendance: "Attended",
    tutorial_subject: "Biology",
    tutorial_notes: "Examined scientific breakthroughs of the 20th century",
  },
  {
    id: "5",
    tutorial_date: "2023-01-20",
    tutorial_time: "15:00",
    students: "Sophia Martin, Lucas Anderson",
    tutor: "David Johnson",
    fee: "50",
    tutorial_no: "TUT005",
    attendance: "No Show",
    tutorial_subject: "Physics",
    tutorial_notes: "Studied waves and their characteristics",
  },
  {
    id: "6",
    tutorial_date: "2023-01-22",
    tutorial_time: "12:00",
    students: "Emily Johnson, Ethan Wilson",
    tutor: "David Johnson",
    fee: "55",
    tutorial_no: "TUT006",
    attendance: "Cancelled",
    tutorial_subject: "Mathematics",
    tutorial_notes: "Solved equations and worked on geometry problems",
  },
  {
    id: "7",
    tutorial_date: "2023-01-25",
    tutorial_time: "16:30",
    students: "Oliver Smith, Mia Johnson",
    tutor: "John Doe",
    fee: "50",
    tutorial_no: "TUT007",
    attendance: "Attended",
    tutorial_subject: "Biology",
    tutorial_notes: "Explored the scientific method and conducted experiments",
  },
  {
    id: "8",
    tutorial_date: "2023-01-28",
    tutorial_time: "13:30",
    students: "Elijah Davis, Charlotte Williams",
    tutor: "Sarah Lee",
    fee: "60",
    tutorial_no: "TUT008",
    attendance: "No Show",
    tutorial_subject: "English",
    tutorial_notes: "Analyzed poetry and discussed literary devices",
  },
  {
    id: "9",
    tutorial_date: "2023-01-30",
    tutorial_time: "11:00",
    students: "Liam Smith, Harper Davis",
    tutor: "David Johnson",
    fee: "55",
    tutorial_no: "TUT009",
    attendance: "Attended",
    tutorial_subject: "Chemistry",
    tutorial_notes: "Experimented with nitrogen",
  },
  {
    id: "10",
    tutorial_date: "2023-02-02",
    tutorial_time: "15:30",
    students: "Mason Johnson, Amelia Smith",
    tutor: "Jane Smith",
    fee: "50",
    tutorial_no: "TUT010",
    attendance: "Attended",
    tutorial_subject: "Irish",
    tutorial_notes: "Learned Grammar rules",
  },
  {
    id: "11",
    tutorial_date: "2023-02-05",
    tutorial_time: "12:30",
    students: "Lucas Davis, Mia Thompson",
    tutor: "Sarah Lee",
    fee: "55",
    tutorial_no: "TUT011",
    attendance: "No Show",
    tutorial_subject: "Mathematics",
    tutorial_notes: "Reviewed advanced algebra concepts",
  },
  {
    id: "12",
    tutorial_date: "2023-02-08",
    tutorial_time: "14:00",
    students: "Ella Wilson, Benjamin Davis",
    tutor: "John Doe",
    fee: "50",
    tutorial_no: "TUT012",
    attendance: "Cancelled",
    tutorial_subject: "Computer Science",
    tutorial_notes: "Conducted hands-on work with SQL ",
  }]

  await Tutor.insertMany(tutor_data);
  await Student.insertMany(student_data);
  await Tutorial.insertMany(tutorial_data);

  console.log('Data inserted');
  await mongoose.disconnect();
}
  catch(error)
  {
      console.error('Data not inserted',error);
      await mongoose.disconnect();
  }
}
