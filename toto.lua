                            +--------------------------------------+
                            |              TROMBI-ELK              |
                            +--------------------------------------+
                                              |
                                              |
            +--------+ +--------+ +--------+ +--------+ +--------+ +--------+
            |        | |        | |        | |        | |        | |        | 
            | Elasti-| | Kibana | |Logstash| | Metric-| |  Back  | | Front  |
            | search | |        | |        | |  Beat  | |        | |        |
            +--------+ +--------+ +--------+ +--------+ +--------+ +--------+ 
                |           |           |           |           |           |
            +------------------+-----------+-----------+-----------+---------+
                                                |
                                +----------------|-----------------+
                                |   Volume (elasticsearch-data)  |
                                +----------------------------------+
                                                |
                                +---------------|------------------+
                                |      Volume (metricbeat-data)   |
                                +----------------------------------+