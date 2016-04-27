#person.py
class Person(object):

    def __init__(self,h):
        self.height = h

    def printHeight(self):
        print "Height: ",self.height


def main():
    guy = Person(5)
    guy.printHeight()

if __name__ == "__main__":
    main()
