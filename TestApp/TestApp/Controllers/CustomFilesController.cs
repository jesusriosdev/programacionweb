using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestApp.Models;
using TestApp.Library.DAL.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace TestApp.Controllers
{
    public class CustomFilesController : BaseController
    {
        private readonly TestAppEntities _ctx;
        private readonly IWebHostEnvironment _hostingEnvironment;

        public CustomFilesController(TestAppEntities ctx, IWebHostEnvironment hostingEnvironment)
        {
            _ctx = ctx;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var model = await CustomFiles.GetList(_ctx);
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Details(int id)
        {
            var model = await CustomFiles.GetItem(_ctx, id);
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            var model = new CustomFilesCreateViewModel();
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CustomFilesCreateViewModel model)
        {
            if(model.file != null && model.file.Length > 0)
            {
                string fileName = String.Empty;
                string filePath = String.Empty;
                byte[] bytes;
                var fileExtension = "pdf";

                fileName = String.Format("CustomFile_{0}.{1}", Guid.NewGuid().ToString(), fileExtension);
                filePath = Path.Combine(Path.Combine(_hostingEnvironment.ContentRootPath, "customfiles"), fileName);

                using (var ms = new MemoryStream())
                {
                    model.file.CopyTo(ms);
                    bytes = ms.ToArray();
                }

                await System.IO.File.WriteAllBytesAsync(filePath, bytes);

                await CustomFiles.Add(_ctx, new CustomFiles()
                {
                    description = model.description,
                    path = filePath
                });

                return RedirectToAction(nameof(CustomFilesController.Index));
            }
            else
            {
                ModelState.AddModelError(String.Empty, "File is required.");
                return View(model);
            }

            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {
            var model = await CustomFiles.GetItem(_ctx, id);
            model.isActive = model.is_active ?? false;
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(Users model)
        {
            model.is_active = model.isActive;
            var result = await Users.Update(_ctx, model);

            return RedirectToAction("Index");
        }
    }
}
