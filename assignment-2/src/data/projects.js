export const projectsData = [
    {
        id: 1,
        title: "Intelligent Product Search System",
        description: "Architected a dual-write e-commerce search engine deployed on AWS EC2, synchronizing an Amazon RDS PostgreSQL source-of-truth with an Elasticsearch inverted index for low-latency queries. Engineered a multi-signal ranking pipeline using the Strategy pattern to score products based on text relevance (BM25), historical popularity, and catalog freshness. Implemented a distributed Redis caching layer to reduce database load and improve retrieval latency.",
        techStack: "Spring Boot, PostgreSQL, Elasticsearch, Redis, AWS EC2, BM25",
        link: "https://github.com/leetrushreyash/Intelligent-search-system"
    },
    {
        id: 2,
        title: "Configurable Web Data Extraction Platform",
        description: "Built a high-throughput Java/Spring Boot data ingestion platform processing 10,000+ executions/day across 4 concurrent data sources. Engineered an O(1) SHA-256 deduplication pipeline eliminating 99% of redundant database writes. Reduced new data source onboarding time by 90% by decoupling DOM parsing into dynamic, zero-downtime YAML configurations. Designed a resilient HTTP fetcher with exponential backoff.",
        techStack: "Spring Boot, PostgreSQL, SHA-256, YAML, Java",
        link: "https://github.com/leetrushreyash/configurable-web-datacollector"
    },
    {
        id: 3,
        title: "High-Performance Log Analyzer",
        description: "Architected a multi-threaded log analysis pipeline in Java leveraging the Producer-Consumer design pattern. Prevented OOM exceptions under high-traffic bursts using bounded ArrayBlockingQueues. Optimized parallel processing with dynamically-sized thread pools (ExecutorService) based on available hardware cores. Engineered non-blocking data aggregation using CompletableFuture. Achieved speeds over 240,000 log entries/second.",
        techStack: "Java, CompletableFuture, ExecutorService, ArrayBlockingQueue",
        link: "https://github.com/leetrushreyash/Concurrent-Log-Analyzer"
    }
]