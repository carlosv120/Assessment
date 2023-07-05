namespace Assessment.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Xml;

    namespace YourProjectNamespace.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class InventoryController : ControllerBase
        {
            [HttpGet]
            public ActionResult<List<Inventory>> Get()
            {
                List<Inventory> inventoryList = new List<Inventory>();

                try
                {
                    // Specify the XML file path
                    string filePath = "inventory.xml";

                    // Load the XML document
                    XmlDocument xmlDoc = new XmlDocument();
                    xmlDoc.Load(filePath);

                    // Get the products element
                    XmlNode productsNode = xmlDoc.SelectSingleNode("/inventory/products");

                    // Loop through each product node
                    foreach (XmlNode productNode in productsNode.SelectNodes("product"))
                    {
                        // Create a new Inventory object
                        Inventory item = new Inventory();

                        // Read the attributes from the product node
                        item.Name = productNode.Attributes["name"].Value;
                        item.Price = double.Parse(productNode.Attributes["price"].Value);
                        item.Quantity = int.Parse(productNode.Attributes["qty"].Value);

                        // Add the inventory item to the list
                        inventoryList.Add(item);
                    }
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Error reading XML file: {ex.Message}");
                }

                return inventoryList;
            }
        }
    }

}
