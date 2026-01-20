import React, { useState } from 'react';

/**
 * DirectoryTree Component
 * 
 * A React component that renders an interactive, expandable directory tree structure.
 * Displays a hierarchical file/folder view with toggle functionality to expand/collapse
 * folders that contain children.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array<Object>} [props.data=[]] - Array of tree node objects representing the directory structure
 * @param {number} props.data[].id - Unique identifier for each node
 * @param {string} props.data[].name - Display name of the file or folder
 * @param {Array<Object>} props.data[].children - Array of child nodes (empty array if leaf node)
 * 
 * @returns {React.ReactElement} A styled div containing the expandable directory tree
 * 
 * @example
 * const treeData = [
 *   {
 *     id: 1,
 *     name: 'src',
 *     children: [
 *       { id: 2, name: 'components', children: [] }
 *     ]
 *   }
 * ];
 * 
 * <DirectoryTree data={treeData} />
 * 
 * @description
 * - Uses React hooks (useState) to manage expanded/collapsed state
 * - Nested TreeNode component recursively renders child nodes
 * - Displays expand/collapse buttons (▶/▼) for folders with children
 * - Maintains left margin indentation for visual hierarchy
 * - Renders a clean, accessible directory structure with Arial font styling
 */
const DirectoryTree = ({ data 
    = [
       {
          id: 1,
          name: 'src',
          children: [
             {
                id: 2,
                name: 'components',
                children: [
                    { id: 3, name: 'Button.js', children: [] },
                    { id: 4, name: 'Header.js', children: [] },
                ],
             },
             {
                id: 5,
                name: 'utils',
                children: [
                    { id: 6, name: 'helpers.js', children: [] },
                ],
             },
             { id: 7, name: 'App.js', children: [] },
          ],
       },
       {
          id: 8,
          name: 'public',
          children: [
             { id: 9, name: 'index.html', children: [] },
          ],
       },
       { id: 10, name: 'package.json', children: [] },
    ]}) => {
    const expandReducer = (state, action) => {
       switch (action.type) {
          case 'TOGGLE':
             return {
                ...state,
                [action.id]: !state[action.id],
             };
          default:
             return state;
       }
    };

    const [expanded, dispatch] = React.useReducer(expandReducer, {});

    const toggleExpand = (id) => {
       dispatch({ type: 'TOGGLE', id });
    };

    const TreeNode = ({ node }) => {
       const hasChildren = node.children && node.children.length > 0;
       const isExpanded = expanded[node.id];

       return (
          <div style={{ marginLeft: '20px' }}>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                {hasChildren && (
                    <button
                       onClick={() => toggleExpand(node.id)}
                       style={{
                          marginRight: '8px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '16px',
                       }}
                    >
                       {isExpanded ? '▼' : '▶'}
                    </button>
                )}
                {!hasChildren && <span style={{ marginRight: '8px', width: '16px' }}></span>}
                <span>{node.name}</span>
             </div>
             {hasChildren && isExpanded && (
                <div>
                    {node.children.map((child) => (
                       <TreeNode key={child.id} node={child} />
                    ))}
                </div>
             )}
          </div>
       );
    };

    return (
       <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h2>Directory Structure</h2>
          {data.map((node) => (
             <TreeNode key={node.id} node={node} />
          ))}
       </div>
    );
};

export default DirectoryTree;