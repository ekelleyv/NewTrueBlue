from BeautifulSoup import *
import json

def main():
	htmlpage = open('TowerVoting.html')
	soup = BeautifulSoup(htmlpage)
	people = []
	
	table= soup.find("table")
	body = table.find("tbody")
	tds = body.findAll("td")

	for td in tds:
		person = {}
		person["image"] = td.img["src"][21:]
		person["name"] = td.div.contents[0]
		people.append(person)

	for person in people:
		input = raw_input("Is {} a man?".format(person["name"]))
		if (input == ""):
			person["male"] = False
		else:
			person["male"] = True

	output_file = open('members.json', 'w')
	
	output = json.dumps(people)

	output_file.write(output)


if __name__ == '__main__':
	main()