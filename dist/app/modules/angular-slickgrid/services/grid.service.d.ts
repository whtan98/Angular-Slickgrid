import { TranslateService } from '@ngx-translate/core';
import { CellArgs, Column, OnEventArgs } from './../models/index';
import { ControlAndPluginService } from './controlAndPlugin.service';
import { FilterService } from './filter.service';
import { GridStateService } from './gridState.service';
import { SortService } from './sort.service';
export declare class GridService {
    private controlAndPluginService;
    private filterService;
    private gridStateService;
    private sortService;
    private translate;
    private _grid;
    private _dataView;
    constructor(controlAndPluginService: ControlAndPluginService, filterService: FilterService, gridStateService: GridStateService, sortService: SortService, translate: TranslateService);
    /** Getter for the Column Definitions pulled through the Grid Object */
    private readonly _columnDefinitions;
    /** Getter for the Grid Options pulled through the Grid Object */
    private readonly _gridOptions;
    init(grid: any, dataView: any): void;
    /**
     * From a SlickGrid Event triggered get the Column Definition and Item Data Context
     *
     * For example the SlickGrid onClick will return cell arguments when subscribing to it.
     * From these cellArgs, we want to get the Column Definition and Item Data
     * @param cell event args
     * @return object with columnDef and dataContext
     */
    getColumnFromEventArguments(args: CellArgs): OnEventArgs;
    getDataItemByRowNumber(rowNumber: number): any;
    /** Chain the item Metadata with our implementation of Metadata at given row index */
    getItemRowMetadata(previousItemMetadata: any): (rowNumber: number) => {
        cssClasses: string;
    };
    /**
     * Highlight then fade a row for x seconds.
     * The implementation follows this SO answer: https://stackoverflow.com/a/19985148/1212166
     * @param rowNumber
     * @param fadeDelay
     */
    highlightRow(rowNumber: number, fadeDelay?: number): void;
    /** Get the currently selected rows */
    getSelectedRows(): any;
    /** Select the selected row by a row index */
    setSelectedRow(rowIndex: number): void;
    /** Set selected rows with provided array of row indexes */
    setSelectedRows(rowIndexes: number[]): void;
    /** Re-Render the Grid */
    renderGrid(): void;
    /**
     * Reset the grid to it's original state (clear any filters, sorting & pagination if exists) .
     * The column definitions could be passed as argument to reset (this can be used after a Grid State reset)
     * The reset will clear the Filters & Sort, then will reset the Columns to their original state
     */
    resetGrid(columnDefinitions?: Column[]): void;
    /**
     * Add an item (data item) to the datagrid
     * @param object dataItem: item object holding all properties of that row
     */
    addItemToDatagrid(item: any): void;
    /**
     * Delete an existing item from the datagrid (dataView)
     * @param object item: item object holding all properties of that row
     */
    deleteDataGridItem(item: any): void;
    /**
     * Delete an existing item from the datagrid (dataView) by it's id
     * @param itemId: item unique id
     */
    deleteDataGridItemById(itemId: string | number): void;
    /**
     * Update an existing item with new properties inside the datagrid
     * @param object item: item object holding all properties of that row
     */
    updateDataGridItem(item: any): void;
    /**
     * Update an existing item in the datagrid by it's id and new properties
     * @param itemId: item unique id
     * @param object item: item object holding all properties of that row
     */
    updateDataGridItemById(itemId: number | string, item: any): void;
}
