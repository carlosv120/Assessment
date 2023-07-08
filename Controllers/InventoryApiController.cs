using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Xml;



namespace Assessment.Controllers
{

    namespace YourProjectNamespace.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class InventoryController : ControllerBase
        {
            [HttpGet]
            public ActionResult<List<Inventory>> Get()
            {
                List<Inventory> list = new List<Inventory>();

                try
                {

                    XmlDocument xmlFile = new XmlDocument();
                    xmlFile.Load("inventory.xml");

                    // Products element
                    XmlNode? productsNode = xmlFile.SelectSingleNode("/inventory/products");

                    // Reading each value
                    foreach (XmlNode productNode in productsNode.SelectNodes("product"))
                    {

                        Inventory item = new Inventory();

                        item.Name = productNode.Attributes["name"].Value;
                        item.Price = double.Parse(productNode.Attributes["price"].Value);
                        item.Quantity = int.Parse(productNode.Attributes["qty"].Value);

                        list.Add(item);
                    }
                }
                catch (Exception exception)
                {
                    return StatusCode(500, $"Internal Error: {exception.Message}");
                }

                return list;
            }
        }
    }
}
