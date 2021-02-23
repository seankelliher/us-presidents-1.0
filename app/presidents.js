const allPresidents = [
    {
        order: 1,
        name: "George Washington",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Virginia",
        partyColor: "rgb(239, 83, 80)",
        party: "Unaffiliated",
        ageColor: "rgb(187, 222, 251)",
        age: 57,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(200, 230, 201)",
        experience: "Commander, Army",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 2,
        name: "John Adams",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "Massachusetts",
        partyColor: "rgb(200, 230, 201)",
        party: "Federalist",
        ageColor: "rgb(255, 236, 179)",
        age: 61,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 3,
        name: "Thomas Jefferson",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Virginia",
        partyColor: "rgb(207, 216, 220)",
        party: "Democratic-Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 57,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 4,
        name: "James Madison",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Virginia",
        partyColor: "rgb(207, 216, 220)",
        party: "Democratic-Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 57,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(245, 245, 245)",
        experience: "Secretary of State",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 5,
        name: "James Monroe",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Virginia",
        partyColor: "rgb(207, 216, 220)",
        party: "Democratic-Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 58,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(245, 245, 245)",
        experience: "Secretary of State",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 6,
        name: "John Quincy Adams",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "Massachusetts",
        partyColor: "rgb(207, 216, 220)",
        party: "Democratic-Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 57,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(245, 245, 245)",
        experience: "Secretary of State",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 7,
        name: "Andrew Jackson",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Carolinas",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(255, 236, 179)",
        age: 61,
        marriageColor: "rgb(245, 245, 245)",
        marriage: "Widower",
        experienceColor: "rgb(187, 222, 251)",
        experience: "Senator, Tennessee",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 8,
        name: "Martin Van Buren",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "New York",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(187, 222, 251)",
        age: 55,
        marriageColor: "rgb(245, 245, 245)",
        marriage: "Widower",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 9,
        name: "William Henry Harrison",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Virginia",
        partyColor: "rgb(245, 245, 245)",
        party: "Whig",
        ageColor: "rgb(255, 236, 179)",
        age: 68,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(207, 216, 220)",
        experience: "Minister, Colombia",
        termColor: "rgb(245, 245, 245)",
        term: "1 month",
        departureColor: "rgb(245, 245, 245)",
        departure: "Died (pneumonia)"
    },
    {
        order: 10,
        name: "John Tyler",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Virginia",
        partyColor: "rgb(245, 245, 245)",
        party: "Whig",
        ageColor: "rgb(187, 222, 251)",
        age: 51,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(187, 222, 251)",
        term: "3 year, 11 months",
        departureColor: "rgb(255, 236, 179)",
        departure: "Lost nomination"
    },
    {
        order: 11,
        name: "James K. Polk",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "North Carolina",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(245, 245, 245)",
        age: 49,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, Tennessee",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 12,
        name: "Zachary Taylor",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Virginia",
        partyColor: "rgb(245, 245, 245)",
        party: "Whig",
        ageColor: "rgb(255, 236, 179)",
        age: 64,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(200, 230, 201)",
        experience: "General, Army",
        termColor: "rgb(187, 222, 251)",
        term: "1 year, 4 months",
        departureColor: "rgb(245, 245, 245)",
        departure: "Died (cholera morbus)"
    },
    {
        order: 13,
        name: "Millard Fillmore",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "New York",
        partyColor: "rgb(245, 245, 245)",
        party: "Whig",
        ageColor: "rgb(187, 222, 251)",
        age: 50,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(187, 222, 251)",
        term: "2 years, 7 months",
        departureColor: "rgb(255, 236, 179)",
        departure: "Lost nomination"
    },
    {
        order: 14,
        name: "Franklin Pierce",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "New Hampshire",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(245, 245, 245)",
        age: 48,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(200, 230, 201)",
        experience: "General, Army",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(255, 236, 179)",
        departure: "Lost nomination"
    },
    {
        order: 15,
        name: "James Buchanan",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "Pennsylvania",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(255, 236, 179)",
        age: 65,
        marriageColor: "rgb(239, 83, 80)",
        marriage: "Never married",
        experienceColor: "rgb(207, 216, 220)",
        experience: "Minister, UK",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 16,
        name: "Abraham Lincoln",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Kentucky",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 52,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(187, 222, 251)",
        experience: "Congressman, Illinois",
        termColor: "rgb(207, 216, 220)",
        term: "4 years, 1 month",
        departureColor: "rgb(245, 245, 245)",
        departure: "Died (assassination)"
    },
    {
        order: 17,
        name: "Andrew Johnson",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "North Carolina",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(187, 222, 251)",
        age: 56,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(187, 222, 251)",
        term: "3 years 10 months",
        departureColor: "rgb(255, 236, 179)",
        departure: "Lost nomination"
    },
    {
        order: 18,
        name: "Ulysses S. Grant",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Ohio",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(245, 245, 245)",
        age: 46,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(200, 230, 201)",
        experience: "General, Army",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 19,
        name: "Rutherford B. Hayes",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Ohio",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 54,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, Ohio",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 20,
        name: "James A. Garfield",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Ohio",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(245, 245, 245)",
        age: 49,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(187, 222, 251)",
        experience: "Congressman, Ohio",
        termColor: "rgb(245, 245, 245)",
        term: "6 months",
        departureColor: "rgb(245, 245, 245)",
        departure: "Died (assassination)"
    },
    {
        order: 21,
        name: "Chester A. Arthur",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "Vermont",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 51,
        marriageColor: "rgb(245, 245, 245)",
        marriage: "Widower",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(187, 222, 251)",
        term: "3 years 5 months",
        departureColor: "rgb(255, 236, 179)",
        departure: "Lost nomination"
    },
    {
        order: 22,
        name: "Grover Cleveland",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "New Jersey",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(245, 245, 245)",
        age: 47,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, New York",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 23,
        name: "Benjamin Harrison",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Ohio",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 55,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(187, 222, 251)",
        experience: "Senator, Indiana",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 24,
        name: "Grover Cleveland",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "New Jersey",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(187, 222, 251)",
        age: 55,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "President",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 25,
        name: "William McKinley",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Ohio",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 54,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, Ohio",
        termColor: "rgb(207, 216, 220)",
        term: "4 years 6 months",
        departureColor: "rgb(245, 245, 245)",
        departure: "Died (assassination)"
    },
    {
        order: 26,
        name: "Theodore Roosevelt",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "New York",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(245, 245, 245)",
        age: 42,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(255, 236, 179)",
        term: "7 years 5 months",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 27,
        name: "William Howard Taft",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Ohio",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 51,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(245, 245, 245)",
        experience: "Secretary of War",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 28,
        name: "Woodrow Wilson",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Virginia",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(187, 222, 251)",
        age: 56,
        marriageColor: "rgb(245, 245, 245)",
        marriage: "Widower",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, New Jersey",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 29,
        name: "Warren G. Harding",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Ohio",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 55,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(187, 222, 251)",
        experience: "Senator, Ohio",
        termColor: "rgb(187, 222, 251)",
        term: "2 years 4 months",
        departureColor: "rgb(245, 245, 245)",
        departure: "Died (heart attack)"
    },
    {
        order: 30,
        name: "Calvin Coolidge",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "Vermont",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 51,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(255, 236, 179)",
        term: "5 years 7 months",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 31,
        name: "Herbert Hoover",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Iowa",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 54,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(245, 245, 245)",
        experience: "Secretary of Commerce",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 32,
        name: "Franklin D. Roosevelt",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "New York",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(187, 222, 251)",
        age: 51,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, New York",
        termColor: "rgb(239, 83, 80)",
        term: "12 years 1 months",
        departureColor: "rgb(245, 245, 245)",
        departure: "Died (cerebral bleed)"
    },
    {
        order: 33,
        name: "Harry S. Truman",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Missouri",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(255, 236, 179)",
        age: 60,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(255, 236, 179)",
        term: "7 years 9 months",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 34,
        name: "Dwight D. Eisenhower",
        birthplaceColor: "rgb(255, 236, 179)",
        birthplace: "Texas",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(255, 236, 179)",
        age: 62,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(200, 230, 201)",
        experience: "Commander, Allies",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(187, 222, 251)",
        departure: "Term limited"
    },
    {
        order: 35,
        name: "John F. Kennedy",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "Massachusetts",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(245, 245, 245)",
        age: 43,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(187, 222, 251)",
        experience: "Senator, Massachusetts",
        termColor: "rgb(187, 222, 251)",
        term: "2 years 10 months",
        departureColor: "rgb(245, 245, 245)",
        departure: "Died (assassination)"
    },
    {
        order: 36,
        name: "Lyndon B. Johnson",
        birthplaceColor: "rgb(255, 236, 179)",
        birthplace: "Texas",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(187, 222, 251)",
        age: 55,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(255, 236, 179)",
        term: "5 years 1 month",
        departureColor: "rgb(207, 216, 220)",
        departure: "Retired"
    },
    {
        order: 37,
        name: "Richard Nixon",
        birthplaceColor: "rgb(200, 230, 201)",
        birthplace: "California",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 56,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(255, 236, 179)",
        term: "5 years 6 months",
        departureColor: "rgb(239, 83, 80)",
        departure: "Resigned"
    },
    {
        order: 38,
        name: "Gerald Ford",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Nebraska",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(255, 236, 179)",
        age: 61,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(187, 222, 251)",
        term: "2 years 5 months",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 39,
        name: "Jimmy Carter",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Georgia",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(187, 222, 251)",
        age: 52,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, Georgia",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 40,
        name: "Ronald Reagan",
        birthplaceColor: "rgb(207, 216, 220)",
        birthplace: "Illinois",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(255, 236, 179)",
        age: 69,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, California",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(187, 222, 251)",
        departure: "Term limited"
    },
    {
        order: 41,
        name: "George H. W. Bush",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "Massachusetts",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(255, 236, 179)",
        age: 64,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(138, 172, 200)",
        experience: "Vice President",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    },
    {
        order: 42,
        name: "Bill Clinton",
        birthplaceColor: "rgb(187, 222, 251)",
        birthplace: "Arkansas",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(245, 245, 245)",
        age: 46,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, Arkansas",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(187, 222, 251)",
        departure: "Term limited"
    },
    {
        order: 43,
        name: "George W. Bush",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "Connecticut",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(187, 222, 251)",
        age: 54,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(255, 236, 179)",
        experience: "Governor, Texas",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(187, 222, 251)",
        departure: "Term limited"
    },
    {
        order: 44,
        name: "Barack Obama",
        birthplaceColor: "rgb(200, 230, 201)",
        birthplace: "Hawaii",
        partyColor: "rgb(187, 222, 251)",
        party: "Democratic",
        ageColor: "rgb(245, 245, 245)",
        age: 47,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(187, 222, 251)",
        experience: "Senator, Illinois",
        termColor: "rgb(200, 230, 201)",
        term: "8 years",
        departureColor: "rgb(187, 222, 251)",
        departure: "Term limited"
    },
    {
        order: 45,
        name: "Donald Trump",
        birthplaceColor: "rgb(245, 245, 245)",
        birthplace: "New York",
        partyColor: "rgb(255, 236, 179)",
        party: "Republican",
        ageColor: "rgb(239, 83, 80)",
        age: 70,
        marriageColor: "rgb(187, 222, 251)",
        marriage: "Married",
        experienceColor: "rgb(239, 83, 80)",
        experience: "Chair, Trump Organization",
        termColor: "rgb(207, 216, 220)",
        term: "4 years",
        departureColor: "rgb(200, 230, 201)",
        departure: "Lost election"
    }
];

export {allPresidents};