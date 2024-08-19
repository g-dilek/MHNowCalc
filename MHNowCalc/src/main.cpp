#include <iostream>
using namespace std;

int main()
{
    // Display the ASCII art
    std::cout << "                         _                                 _                  __              \n"
                 "  /\\/\\   ___  _ __  ___| |_ ___ _ __    /\\  /\\_   _ _ __ | |_ ___ _ __    /\\ \\ \\_____      __\n"
                 " /    \\ / _ \\| '_ \\/ __| __/ _ \\ '__|  / /_/ / | | | '_ \\| __/ _ \\ '__|  /  \\/ / _ \\ \\ /\\ / /\n"
                 "/ /\\/\\ \\ (_) | | | \\__ \\ ||  __/ |    / __  /| |_| | | | | ||  __/ |    / /\\  / (_) \\ V  V / \n"
                 " \\/    \\/\\___/|_| |_|___/\\__\\___|_|    \\/ /_/  \\__,_|_| |_|\\__\\___|_|    \\_\\ \\/ \\___/ \\_/\\_/  \n"
                 "\n";

    std::cout << "Welcome to the Monster Hunter Now wait time calculator.\n";
    std::cout << "by Grace\n";

    char userChoice;

    do
    {
        // Welcome message and user input
        std::cout << "\nPlease enter how many HP you are waiting to recover: ";

        int hitPoints = 0;
        std::cin >> hitPoints;
        std::cout << "\n";

        // Calculate total wait time in seconds
        int secondsTotal = hitPoints * 30;
        int minutesTotal = secondsTotal / 60;
        int secondsRemaining = secondsTotal % 60; // Calculate remaining seconds

        // Output the result
        std::cout << "*********************************************************\n";
        std::cout << "You need to wait " << minutesTotal << " minutes and "
                  << secondsRemaining << " seconds before you are 30% healed.\n";
        std::cout << "*********************************************************\n";

        // Ask the user if they want to calculate another time
        std::cout << "\nWould you like to calculate another wait time? (Y/N): ";
        std::cin >> userChoice;

        // Convert to uppercase to handle both 'y' and 'Y'
        userChoice = toupper(userChoice);

    } while (userChoice == 'Y'); // Continue if the user entered 'Y' or 'y'

    std::cout << "Thank you for using the calculator. Goodbye!\n";
    return 0;
}
