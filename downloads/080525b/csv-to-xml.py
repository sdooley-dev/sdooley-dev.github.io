import csv

# Load your template XML
with open("template.xml", "r") as file:
    template_xml = file.read()

# Create a single output file
output_filename = "output.xml"
with open(output_filename, "w") as outfile:
    # Write the opening root element
    outfile.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    outfile.write('<root>\n')
    
    # Read CSV and generate XML content for each row
    with open("data.csv", newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for i, row in enumerate(reader, start=1):
            xml_filled = template_xml
            for key, value in row.items():
                # Handle the mapping between CSV column names and template placeholders
                if key == "varGuid":
                    xml_filled = xml_filled.replace("[varGuid]", value)
                elif key == "testItemId":
                    xml_filled = xml_filled.replace("[varTestItemId]", value)
                elif key == "varTitle":
                    xml_filled = xml_filled.replace("[varTitle]", value)
                elif key == "varResultName":
                    xml_filled = xml_filled.replace("[varResultName]", value)
                elif key == "varField":
                    xml_filled = xml_filled.replace("[varField]", value)
                elif key == "varValue":
                    xml_filled = xml_filled.replace("[varValue]", value)
            
            # Append the filled XML to the output file
            outfile.write(xml_filled)
            print(f"Processed row {i}")
    
    # Write the closing root element
    outfile.write('\n</root>')

print(f"Generated: {output_filename}")
