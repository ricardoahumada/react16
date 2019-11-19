const express = require('express');
const router = express.Router();

const data = [
  { id: 1, titulo: "A Clinical Guide to the Treatment of the Human Stress Response", autor: "George S. Everly, Jr., Jeffrey M. Lating", isbn: "978-1-4614-5538-7" },
  { id: 2, titulo: "Adaptive Decision Making and Intellectual Styles", autor: "Francesco Sofo, Cinzia Colapinto, Michelle Sofo, Salvatore Ammirato", isbn: "978-1-4614-6708-3" },
  { id: 3, titulo: "Adolescents, Crime, and the Media", autor: "Christopher J. Ferguson", isbn: "978-1-4614-6741-0" },
  { id: 4, titulo: "Analyzing and Theorizing the Dynamics of the Workplace Incivility Crisis", autor: "Michael Leiter", isbn: "978-94-007-5571-0" },
  { id: 5, titulo: "Anti-Poverty Psychology", autor: "Stuart C. Carr", isbn: "978-1-4614-6303-0" },
  { id: 6, titulo: "Applied Issues in Investigative Interviewing, Eyewitness Memory, and Credibility Assessment", autor: "Barry S. Cooper, Dorothee Griesel, Marguerite Ternes", isbn: "978-1-4614-5547-9" },
  { id: 7, titulo: "Aspetti psicologici nella sclerosi multipla", autor: "Silvia Bonino", isbn: "978-88-470-2724-4" },
  { id: 8, titulo: "Assistive Technology", autor: "Giulio E. Lancioni, Jeff Sigafoos, Mark F. O'Reilly, Nirbhay N. Singh", isbn: "978-1-4614-4229-5" },
  { id: 9, titulo: "Attracted to Conflict: Dynamic Foundations of Destructive Social Relations", autor: "Robin R. Vallacher, Peter T. Coleman, Andrzej Nowak, Lan Bui-Wrzosinska, Larry Liebovitch, Katharina Kugler, Andrea Bartoli", isbn: "978-3-642-35280-5" },
  { id: 10, titulo: "Autism and the Brain", autor: "Tatyana B Glezerman", isbn: "978-1-4614-4112-0" },
  { id: 11, titulo: "Burnout for Experts", autor: "Sabine Bährer-Kohler", isbn: "978-1-4614-4391-9" },
  { id: 12, titulo: "Clinical Guide to Mental Disability Evaluations", autor: "Liza H. Gold, Donna L. Vanderpool", isbn: "978-1-4614-5447-2" },
  { id: 13, titulo: "Clinical Psychology and Psychotherapy as a Science", autor: "Luciano L'Abate", isbn: "978-1-4614-4451-0" },
  { id: 14, titulo: "College Students with ADHD", autor: "Lisa L. Weyandt, George J. DuPaul", isbn: "978-1-4614-5345-1" },
  { id: 15, titulo: "Cooperation, Community, and Co-Ops in a Global Era", autor: "Carl Ratner", isbn: "978-1-4614-5825-8" },
  { id: 16, titulo: "Divorced Fathers and Their Families", autor: "Florence W. Kaslow", isbn: "978-1-4614-5535-6" },
  { id: 17, titulo: "Encyclopedia of Autism Spectrum Disorders", autor: "Fred R. Volkmar", isbn: "978-1-4419-1698-3" },
  { id: 18, titulo: "Families and Child Health", autor: "Nancy S. Landale, Susan M. McHale, Alan Booth", isbn: "978-1-4614-6194-4" },
  { id: 19, titulo: "Female Prisoners, AIDS, and Peer Programs", autor: "Kimberly Collica", isbn: "978-1-4614-5110-5" },
  { id: 20, titulo: "Fostering Resilience for Loss and Irrelevance", autor: "Eric A. Kreuter", isbn: "978-1-4614-5773-2" },
  { id: 21, titulo: "Gender Roles in Immigrant Families", autor: "Susan S. Chuang, Catherine S. Tamis-LeMonda", isbn: "978-1-4614-6735-9" },
  { id: 22, titulo: "Girls at Risk", autor: "Anna-Karin Andershed", isbn: "978-1-4614-4130-4" },
  { id: 23, titulo: "Guide to Psychological Assessment with Hispanics", autor: "Lorraine T. Benuto", isbn: "978-1-4614-4412-1" },
  { id: 24, titulo: "Handbook of Adolescent Health Psychology", autor: "William T. O'Donohue, Lorraine T. Benuto, Lauren Woodward Tolle", isbn: "978-1-4614-6633-8" },
  { id: 25, titulo: "Handbook of Assessing Variants and Complications in Anxiety Disorders", autor: "Dean McKay, Eric A. Storch", isbn: "978-1-4614-6452-5" },
  { id: 26, titulo: "Handbook of Crisis Intervention and Developmental Disabilities", autor: "Derek D. Reed, Florence D. DiGennaro Reed, James K. Luiselli", isbn: "978-1-4614-6531-7" },
  { id: 27, titulo: "Handbook of Culturally Responsive School Mental Health", autor: "Caroline S. Clauss-Ehlers, Zewelanji N. Serpell, Mark D. Weist", isbn: "978-1-4614-4948-5" },
];

router.get('/', function (req, res) {
  res.status(200).json(data);
});

router.get('/:id', function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});


module.exports = router;