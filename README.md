[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12894736&assignment_repo_type=AssignmentRepo)
# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.

#### process
I have included the tsp_hk from the Held-Karp TSP homework and tsp_ls from the local research assignment. Each main running function is wrapped with a timer to measure the results for different matrix sizes: 5x5, 10x10, 15x15, 20x20, and 30x30.

While the worst-case time analysis for the implemented TSP local research is $O(n^3)$, the TSP Held-Karp implementation has a worst runtime of $O(n^2 * 2^n)$. I am aware that the Held-Karp algorithm's runtime increases significantly with larger matrix sizes. 

In my experiments, I noticed that Held-Karp produces immediate results equal to or less than a matrix size of 15x15. However, when the matrix size reaches 20x20, it runs for more than 3 hours, suggesting a potential issue in the algorithm implementation leading to such extended runtimes. Unfortunately, I was unable to obtain around results for a 30x30 matrix using the Held-Karp algorithm. As a result, I marked approximately 3.03 hours on the image, causing the endpoint of the red line for tsp_hk to be positioned beyond 3 hours, rather than reaching zero for the 30x30 matrix. While I acknowledge that this representation may not be entirely accurate, it does signify that the runtime of the Held-Karp algorithm for a 30x30 matrix is not zero.

In contrast, the TSP local research algorithm consistently exhibits smooth and fast execution, with short running times for each test.


