#include <iostream>
using namespace std;

int main()
{
    std::cout << "Welcome to the Monster Hunter Now wait time calculator.\n";
    std::cout << "Please enter how many HP you are waiting to recover: ";

    int hitPoints = 0;
    std::cin >> hitPoints;

    // Calculate total wait time in seconds
    int secondsTotal = hitPoints * 30;
    int minutesTotal = secondsTotal / 60;
    int secondsRemaining = secondsTotal % 60; // Calculate remaining seconds

    // Output the result
    std::cout << "\n\nYou need to wait " << minutesTotal << " minutes and "
              << secondsRemaining << " seconds before you are 30% healed.\n";

    return 0;
}