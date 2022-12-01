module.exports = [
    {
        title: 'Database Schema',
        collapsable: false,
        sidebarDepth: -1,
        children: [
            [
                '',
                'Introduction'
            ],
            [
                '/database/models/',
                'Model Basic'
            ]
        ]
    },
    {
        title: 'Database Models',
        collapsable: false,
        sidebarDepth: -1,
        children: [
            [
                '/database/models/campaign',
                'Campaign Model'
            ],
            [
                '/database/models/subscriber',
                'Subscriber Model',
            ],
            [
                '/database/models/funnel',
                'Funnel Model',
            ],
            // [
            //     '/database/models/funnelSubscriber',
            //     'FunnelSubscriber Model',
            // ],
            [
                '/database/models/funnelSequence',
                'FunnelSequence Model',
            ],
            [
                '/database/models/funnelMetric',
                'FunnelMetric Model',
            ],
        ]
    }
];
