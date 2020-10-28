using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestApp2.Models;

namespace TestApp2.Controllers
{
    public class PersonsController : Controller
    {
        private readonly ILogger<PersonsController> _logger;

        public PersonsController(ILogger<PersonsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var model = new PersonViewModel();
            model.FirstName = "Jesus";
            model.LastName = "Rios";
            model.Age = 29;
            return View(model);
        }
    }
}
