# Logging Error Messages and Warning Levels (SLF4J Example)

This project demonstrates how to log error messages and warning levels in a Java application using SLF4J and Logback.

## Project Structure

```
untitled/
├── pom.xml
├── src/
│   └── main/
│       └── java/
│           └── org/
│               └── example/
│                   └── LoggingExample.java
└── target/
```

## Getting Started

### Prerequisites
- Java 8 or higher
- Maven
- IntelliJ IDEA (recommended for running)

### Build the Project

Navigate to the `untitled` directory and run:

```sh
mvn clean install
```

### Run the Application in IntelliJ IDEA

1. **Open the Project:**
   - Open IntelliJ IDEA.
   - Go to `File > Open...` and select the `untitled` folder.
2. **Import Maven Project:**
   - IntelliJ should auto-detect the `pom.xml` and import dependencies.
3. **Locate the Main Class:**
   - In the Project pane, go to `src/main/java/org/example/LoggingExample.java`.
4. **Run the Main Method:**
   - Right-click inside the `LoggingExample` class and select `Run 'LoggingExample.main()'`.
5. **View Output:**
   - The Run window will display log output similar to:
     ```
     ERROR org.example.LoggingExample - This is an error message
     WARN  org.example.LoggingExample - This is a warning message
     ```

### Run from Command Line

You can also run the main class using:

```sh
mvn exec:java -Dexec.mainClass="org.example.LoggingExample"
```

## License

This project is for demonstration and educational purposes. 