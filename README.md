# Online-Store-App

Welcome to the Online Store App! This project is designed to provide you with an online store platform. Follow these steps to set up and run the application.

## Getting Started

1. **Clone the Repository:** Clone the repository to your local machine using the following command:

    ```bash
    git clone https://github.com/hminshen/Online-Store-App.git
    ```

2. **Configure Environment Variables:**

    - **Backend (.env):** In the `backend` directory, create a `.env` file with the following variables:

        ```env
        DATABASE_URL="postgresql://user:f994e125a74c839586f7172d0065bbed5e617433ce19ef27ae9bcb701cff9667@localhost:5432/onlinestoreapp?schema=public"
        API_BASE_URL=http://localhost:3002
        PORT=3002

        FRONTEND_HTTP=http
        FRONTEND_SERVER=localhost
        FRONTEND_PORT=3000

        POSTGRES_USER=user
        POSTGRES_PASSWORD=f994e125a74c839586f7172d0065bbed5e617433ce19ef27ae9bcb701cff9667
        POSTGRES_DB=onlinestoreapp
        ```

    - **Frontend (.env.local):** In the `frontend` directory, create a `.env.local` file with the following variable:

        ```env
        NEXT_PUBLIC_API_ENDPOINT=http://localhost:3002
        ```

3. **Install Dependencies:**

    - Install frontend dependencies:

        ```bash
        cd frontend
        npm install
        ```

    - Install backend dependencies:

        ```bash
        cd ../backend
        npm install
        ```

4. **Generate Prisma Client:** Generate the Prisma client in the `backend` directory using the following command:

    ```bash
    npx prisma generate
    ```

5. **Set Up Docker Container:** Ensure you have Docker Desktop installed and run the following command to spin up a Docker container:

    ```bash
    docker-compose up -d
    ```

6. **Migrate Prisma Database:** Migrate the Prisma database in the `backend` directory:

    ```bash
    npx prisma migrate dev
    ```

7. **Seed the Database:** Seed the database in the `backend` directory:

    ```bash
    npx prisma db seed
    ```

8. **Start the Backend Server:** Start the backend server by running the following command in the `backend` directory:

    ```bash
    npm run start
    ```

9. **Start the Frontend Server:** In a separate terminal, navigate to the `frontend` directory and start the frontend server:

    ```bash
    cd frontend
    npm run dev
    ```

10. **Access the Application:** Open your web browser and navigate to `http://localhost:3000` to access the landing page of the Online Store App.

Enjoy using the application!

**Note:** From **Step 7**, the database has been seeded with an admin user with the following credentials:

- **Username:** John
- **Password:** abc123

After successfully logging in on the login page, the admin user will have access to the "Manage Items" page, where CRUD operations can be performed for the store items.

# App Deployment Guide

## Deployment on a Cloud Environment

To deploy this app on a cloud environment, follow these steps:

1. **Choose a Cloud Provider**: Cloud provider such as AWS, GCP, Azure can be chosen

2. **Set Up Cloud Resources**: Create managed database services, deploy backend, and frontend resources on the cloud.

3. **Configure Domain and SSL**: Set up custom domain DNS and SSL/TLS certificates for secure communication.

4. **Scaling and Load Balancing**: Implement auto-scaling and load balancing solutions for high availability.

5. **Monitoring and Logging**: Set up cloud monitoring and logging services to track performance and security.

6. **CI/CD Pipeline**: Implement a CI/CD pipeline for automated code deployment.

7. **Security Groups and IAM Roles**: Configure security groups and IAM roles for resource access control.

8. **Backup and Recovery**: Implement backups and disaster recovery strategies for data.

To deploy using serverless components, break down the backend into serverless functions, set up serverless API gateways, and use managed databases and cloud storage. Authentication and authorization services need to be implemented for user management and security.

## Security Hardening Techniques

These are some techniques that can help with security hardening:

1. **Multi-Factor Authentication (MFA)**: Enable MFA for cloud console access.

2. **Network Security Groups (NSGs)**: Use NSGs or equivalent to control traffic.

3. **Identity and Access Management (IAM)**: Implement least privilege access control with IAM roles and policies.

4. **Data Encryption**: Encrypt data at rest and in transit using cloud-native encryption services.

5. **Security Patching**: Keep resources and software up to date with security patches.

6. **Logging and Monitoring**: Set up comprehensive logging and real-time alerts for suspicious activities.

7. **Firewalls**: Use cloud provider firewalls for DDoS protection and access control.

8. **Vulnerability Scanning**: Regularly scan for vulnerabilities and perform penetration testing.

9. **Incident Response Plan**: Develop and test an incident response plan for security incidents.

10. **Data Backups**: Implement automated data backups and recovery solutions.

11. **Compliance**: Align with industry-specific compliance standards and follow cloud provider best practices for security.

**Assumptions & Interpretations:**

1. Admin users have to be manually added to the database. Therefore, an admin user has been pre-seeded into the database for convenience.

2. The "Signup" button on the login page is intended for regular users to sign in to their accounts. This feature is in place for potential future implementations, such as shopping carts and payments. However, since these features are not currently required, the signup page has not been included, and the button serves as a placeholder.

3. From my git commits, you will see that i have mainly branched on main (ie. main to feature/test-feature and PR back to main). I know that this is not the correct practice when working in dev teams as usually, there is a dev branch where developers will branch from to implement features and make PRs to it. main branch will only be PR to for deployment of new release. However in this case, I am the sole person working on the application, and the application is not production ready until the end of development. Hence, i decided to not have the use of the develop branch and worked directly with main branch.

4. I acknowledge that the styling may appear plain. However, I have chosen to prioritize functionality and meeting the specified requirements of the task as outlined.
